import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { TNativeScreenProps, TRouteProps } from "../Routes";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import BaseInput from "../shared/components/BaseInput";
import { theme } from "../shared/themes/Theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from "@expo/vector-icons/Entypo";
import ListItem from "../shared/components/ListItem";

interface IListItem {
  id: string;
  description: string;
  rate: number;
  datetime: number;
}

const Home = () => {
  const navigation = useNavigation<TNativeScreenProps>();
  const { params } = useRoute<TRouteProps<"home">>();
  const [name, setName] = useState("");

  const [list, setList] = useState<IListItem[]>([]);

  useEffect(() => {
    if (params?.newName) setName(params?.newName || "");
  }, [params?.newName]);

  useEffect(() => {
    if (params?.newItem) {
      // setList((oldList) => {
      //   if (!params?.newItem) return oldList;

      //   const index = oldList.findIndex(
      //     (item) => item.id === params.newItem?.id,
      //   );
      //   if (index < 0) return [...oldList, params.newItem];
      //   oldList.splice(index, 1, params.newItem);

      //   return [...oldList];
      // });

      loadItems()
    }
  }, [params?.newItem]);

  useEffect(() => {
    if (params?.idDeleted) {
      // setList((oldList) => {
      //   if (!params?.idDeleted) return oldList;

      //   const index = oldList.findIndex((item) => item.id === params.idDeleted);
      //   if (index < 0) return oldList;
      //   oldList.splice(index, 1);

      //   return [...oldList];
      // });

      loadItems()
    }
  }, [params?.idDeleted]);

  useEffect(() => {
    AsyncStorage.getItem("user-name").then((value) => {
      setName(value || "");
    });
  }, []);

  useEffect(() => {
    loadItems()
  }, []);

  const loadItems = () => {
    AsyncStorage.getItem("humor-items")
      .then((itemsAsString) =>
        !itemsAsString ? [] : (JSON.parse(itemsAsString) as any[]),
      )
      .then((items) => {
        setList(items);
      });
  };

  return (
    <>
      <Header name={name} />

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            rate={item.rate}
            description={item.description}
            datetime={item.datetime}
            onPress={() => navigation.navigate("detail", { id: item.id })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyContentText}>
              Você ainda não {"\n"}
              registou seu humor!
            </Text>
          </View>
        }
      />

      <Footer>
        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>
            {name ? "Como está o seu humor agora?" : "Qual é o seu nome?"}{" "}
          </Text>
          {name ? (
            <View style={styles.footerStarContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("detail", { rate: 1 })}
              >
                <Entypo
                  name="star-outlined"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("detail", { rate: 2 })}
              >
                <Entypo
                  name="star-outlined"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("detail", { rate: 3 })}
              >
                <Entypo
                  name="star-outlined"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("detail", { rate: 4 })}
              >
                <Entypo
                  name="star-outlined"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("detail", { rate: 5 })}
              >
                <Entypo
                  name="star-outlined"
                  size={36}
                  color={theme.colors.textPlaceholder}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <BaseInput
              label="Nome"
              asButton={true}
              onPress={() => navigation.navigate("setUserName")}
            >
              <TextInput
                placeholder="Escreva seu nome aqui..."
                editable={false}
                pointerEvents="none"
                style={styles.footerInput}
              />
            </BaseInput>
          )}
        </View>
      </Footer>
    </>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    gap: 15,
  },
  footerTitle: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.text,
  },
  footerInput: {
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.textPlaceholder,
    padding: 12,
  },
  emptyContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  emptyContentText: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.subtitle,
    fontFamily: theme.fonts.family.italic,
    color: theme.colors.text,
  },
  footerStarContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 16,
  },
  listContainer: {
    padding: 16,
    flexGrow: 1,
    gap: 8,
  },
});

export default Home;
