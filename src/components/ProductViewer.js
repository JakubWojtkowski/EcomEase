import {
  Add,
  AllInbox,
  Favorite,
  LocalShippingOutlined,
  Remove,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductSlider from "./ProductSlider";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase.config";

function ProductViewer() {
  const { categoryId, id } = useParams();
  const [item, setItem] = useState();
  const [itemCategoryId, setItemCategoryId] = useState("");
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    async function getItemId() {
      // getting single product
      const docRef = doc(db, "categories", categoryId, "items", id);
      const docSnap = await getDoc(docRef);

      docSnap.data()
        ? setItem(docSnap.data())
        : console.log("Error fetching data from the database.");

      // getting other products from the same category
      const tempCategoryName = docSnap.data().category;

      try {
        if (docSnap.data()) {
          const q = query(
            collection(db, "categories"),
            where("categoryName", "==", tempCategoryName)
          );

          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            const qItems = query(collection(db, `categories/${doc.id}/items`));
            setItemCategoryId(doc.id);

            onSnapshot(qItems, (snapshot) => {
              setCategoryItems(
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
              );
            });
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    getItemId();
  }, [id, categoryId]);
  console.log("reload: ", categoryItems);
  return (
    <Container>
      {item && (
        <>
          <Upper>
            <Path>
              EcomEase / {item.category} / <span>{item.model}</span>
            </Path>
          </Upper>

          <Main>
            <Product>
              <Image src={item.image} alt="" loading="lazy" />
            </Product>
            <ProductDescription>
              <MiniHeading>{item.name}</MiniHeading>
              <Heading>{item.model}</Heading>
              <Description>{item.description}</Description>
              <hr></hr>
              <Ratings>Ratings:⭐⭐⭐⭐ 4.3 / 5 (209 reviews)</Ratings>
              <Quantity>
                <QuantityButton>
                  <IconButton>
                    <Remove />
                  </IconButton>
                  1
                  <IconButton>
                    <Add />
                  </IconButton>
                </QuantityButton>
                <QuantityText>
                  Only<span> 12 items </span> left!
                  <br></br> Don't miss it.
                </QuantityText>
              </Quantity>
              <hr></hr>
              <DeliveryInf>
                <FirstInf>
                  <IconInf>
                    <LocalShippingOutlined /> Free Delivery
                  </IconInf>
                  <DescriptionInf>
                    <span>
                      Free shipping within the country. Check shipping cost to
                      your country <span>here</span>
                    </span>
                  </DescriptionInf>
                </FirstInf>

                <SecondInf>
                  <IconInf>
                    <AllInbox />
                    Return Delivery
                  </IconInf>
                  <DescriptionInf>
                    <span>
                      Ordered products can be returned free of charge and
                      without giving a reason within 30 days
                    </span>
                  </DescriptionInf>
                </SecondInf>
              </DeliveryInf>
              <AddButtons>
                <AddBtn>Add to Cart</AddBtn>
                <AddBtnFavorite>
                  Add to Favorite <Favorite />
                </AddBtnFavorite>
              </AddButtons>
            </ProductDescription>
          </Main>

          <Bottom>
            <SliderHeading>
              See more from <span>{item.category}</span>
            </SliderHeading>
            {categoryItems && (
              <ProductSlider
                categoryItems={categoryItems}
                categoryId={itemCategoryId}
              />
            )}
          </Bottom>
        </>
      )}
    </Container>
  );
}

export default ProductViewer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 50px auto;
  width: 90vw;
  color: #303030;
`;

const Upper = styled.div``;

const Path = styled.div`
  color: rgba(0, 0, 0, 0.5);

  span {
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  margin: 20px 0 80px 0;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Product = styled.div`
  margin: 0 auto auto auto;
  padding: 48px;
  background: #f9f5f6;
  border-radius: 16px;

  @media only screen and (max-width: 768px) {
    height: auto;
    width: 85%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  hr {
    opacity: 0.15;
  }
`;

const MiniHeading = styled.span`
  letter-spacing: 0.5px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
`;

const Heading = styled.h2`
  letter-spacing: 0.5px;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 1.75;
`;

const Ratings = styled.span`
  font-size: 14px;
`;

const Quantity = styled.div`
  display: flex;
  gap: 20px;
`;

const QuantityText = styled.div`
  font-size: 14px;
  line-height: 1.5;
  span {
    color: orange;
  }
`;

const QuantityButton = styled.div`
  background: #f9f5f6;
  width: 140px;
  border-radius: 32px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 8px;
`;

const DeliveryInf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 20px 0;
`;

const FirstInf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  border: 2px solid #f5f5f5;
  border-radius: 16px;
  padding: 20px;
  letter-spacing: 0.25px;

  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1.5;
  }

  span > span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const IconInf = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DescriptionInf = styled.div``;

const SecondInf = styled(FirstInf)``;

const AddButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const AddBtn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 48px;
  background: orange;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid orange;
  border-radius: 32px;
  padding: 2px 4px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 0.25px;
  font-size: 14px;
  transition: all 250ms ease-in-out;

  &:hover {
    background: #fefefe;
    color: orange;
  }
`;

const AddBtnFavorite = styled(AddBtn)`
  color: orange;
  background: rgba(255, 255, 255, 0.9);
  gap: 4px;

  &:hover {
    background: orange;
    color: rgba(255, 255, 255, 0.9);
  }

  .MuiSvgIcon-root {
    font-size: 20px !important;
  }
`;

const Bottom = styled.div``;

const SliderHeading = styled.h2``;
