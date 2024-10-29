import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "@/assets/types/product";
import { Link } from "expo-router";

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link asChild href={`/product/${product.slug}`}>
      <Pressable style={styles.item}>
        <View style={styles.itemImageContainer}>
          <Image source={product.heroImage} style={styles.ItemImage} />
        </View>

        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{product.title}</Text>
          <Text style={styles.itemPrice}>{product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  item: {
    width: "48%",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemImageContainer: {
    borderRadius: 10,
    width: "100%",
    height: 150,
  },
  ItemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  itemTextContainer: {
    padding: 10,
    alignItems: "flex-start",
    gap: 4,
  },
  itemTitle: {
    fontSize: 16,
    color: "#888",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
