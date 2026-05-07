import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../themes/Theme";
import Entypo from '@expo/vector-icons/Entypo';
import { format } from "date-fns";

interface IListItemProps {
    datetime: number
    rate: number
    description?: string
    onPress?: () => void
}

const ListItem = ({rate, datetime, description, onPress} : IListItemProps) => { 
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
      <Text style={styles.datetimeText}>
        { format(new Date(datetime), "dd/MM/yyyy 'as' HH:mm ") }
      </Text>

      <View style={styles.starContainer}>

        {Array.from(new Array(rate)).map((_, index, all) => (
            <Entypo 
            key={index}
            name={"star"} 
            size={24} 
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
            size={24} 
            style={styles.star}
            color={theme.colors.highlight} />
        ))}

      </View>

      {description && (
        <Text style={styles.descriptionText} numberOfLines={2}>
        {description}
      </Text>
      )}
    </TouchableOpacity>
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
    padding: 5
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
