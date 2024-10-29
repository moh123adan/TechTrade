import { PRODUCTS } from "@/assets/products";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ProductListItem } from "../../components/product-list-item";
import { listHeader } from "@/src/components/list-header";

export default function index() {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={listHeader}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
