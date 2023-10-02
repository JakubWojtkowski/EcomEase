import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "../../firebase.config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import Categories from "../Categories";
import { Menu } from "@mui/icons-material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CardSkeleton from "../CardSkeleton";
import Skeleton from "react-loading-skeleton";

function Products() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [category, setCategory] = useState({
    id: "",
    name: "",
  });

  const showCategories = () => {
    setCategoriesOpen((current) => !current);
  };

  useEffect(() => {
    setIsLoading(true);
    async function getItems() {
      if (!categoryId) {
        // fetching recommended products
        const q = query(
          collection(db, "categories"),
          where("categoryName", "==", "Recommended")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setCategory((category) => ({
            ...category,
            id: doc.id,
            ...doc.data(),
          }));
          // items
          const qItems = query(collection(db, `categories/${doc.id}/items`));
          onSnapshot(qItems, (snapshot) => {
            setItems(
              snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            setIsLoading(false);
          });
        });
      } else {
        // fetching all products from current category
        onSnapshot(
          collection(db, `categories/${categoryId}/items`),
          (snapshot) => {
            let tempProducts = snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            });

            setItems(tempProducts);
            setIsLoading(false);
          }
        );
      }
    }

    getItems();
  }, [categoryId]);
  console.log(isLoading);

  useEffect(() => {
    const getCurrentCategory = async () => {
      if (categoryId) {
        const docRef = doc(db, "categories", categoryId);
        const docSnap = await getDoc(docRef);

        docSnap.data()
          ? setCategory(() => ({
              id: docSnap.id,
              ...docSnap.data(),
            }))
          : console.log("Error fetching category...");
      }
    };

    getCurrentCategory();
  }, [categoryId]);

  return (
    <Container>
      {isCategoriesOpen ? (
        <Categories showCategories={showCategories} />
      ) : (
        <CategoriesBtn onClick={() => setCategoriesOpen(true)}>
          <Menu />
        </CategoriesBtn>
      )}
      <Wrapper>
        <SectionHeading>
          {category.categoryName || <Skeleton count={0.35} />}
        </SectionHeading>
        <Main>
          {isLoading && <CardSkeleton cards={8} />}
          {items?.map((item, index) => (
            <Link to={`/detail/${category.id}/${item.id}`} key={index}>
              <Product item={item} />
            </Link>
          ))}
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  padding: 20px 0;
  color: #303030;

  a {
    text-decoration: none;
    color: #303030;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
  padding: 0 12px;
`;

const SectionHeading = styled.h1`
  margin-bottom: 20px;
  letter-spacing: 0.25px;
  font-size: clamp(22px, 5vw, 32px);
  @media only screen and (max-width: 425px) {
    text-align: center;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const CategoriesBtn = styled.div`
  position: fixed;
  width: 40px;
  height: 48px;
  transform: translateX(-22%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: orange;
  color: #132921;

  .MuiSvgIcon-root {
    padding-left: 4px;
    font-size: 28px !important;
  }

  @media (max-width: 768px) {
    width: 32px;
  }
`;
