import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Review from "./Review";
import styles from "./reviewProduct.style";

const ReviewProduct = ({ data = [] }) => {
  const [reviews, setReviews] = useState(data);

  useEffect(() => {
    setReviews(data);
  }, [data]);

  return (
    <View style={styles.container}>
      {reviews.map((item, index) => (
        <Review key={index} />
      ))}
    </View>
  );
};

export default ReviewProduct;
