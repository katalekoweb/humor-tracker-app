import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../themes/Theme";
import Entypo from '@expo/vector-icons/Entypo';

interface IListItemProps {
    datetime: string
    rate: number
    description?: string
}

const ListItem = ({rate, datetime, description} : IListItemProps) => { 
  return (
    <View style={styles.container}>
      <Text style={styles.datetimeText}>{datetime}</Text>

      <View style={styles.starContainer}>

        {Array.from(new Array(rate)).map((_, index, all) => (
            <Entypo 
            key={index}
            name={"star"} 
            size={36} 
            style={{
                ...styles.starFill, 
                ...(index === 0 ? styles.starFillStart : {}),
                ...(index+1 === all.length ? styles.starFillEnd : {}),
            }}
            color={theme.colors.highlight} />
        ))}

        {Array.from(new Array(5 - rate)).map((_, index, all) => (
            <Entypo 
            key={index}
            name={"star-outlined"} 
            size={36} 
            style={styles.star}
            color={theme.colors.highlight} />
        ))}

      </View>

      <Text style={styles.descriptionText}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.paper,
    borderRadius: 8,
    padding: 12,
    gap: 4,
  },
  datetimeText: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.sizes.body,
    color: theme.colors.textPlaceholder
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    padding: 4
  },
  starFill: {
    backgroundColor: theme.colors.backgroundHighlight,
    padding: 2
  },
  starFillStart: {
    backgroundColor: theme.colors.backgroundHighlight,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  starFillEnd: {
    backgroundColor: theme.colors.backgroundHighlight,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  descriptionText: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.sizes.body,
    color: theme.colors.text
  },
});

export default ListItem;
