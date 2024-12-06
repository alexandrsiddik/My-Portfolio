import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ item }) => {
    const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'
    return (
        <View style={styles.itemComponent}>
            <Image 
            source={{ uri: logoUrl }} 
            style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.languageText}>Название языка: {item.lang}</Text>
                <Text style={styles.experienceText}>Опыт: {item.experience} лет</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    logo: {
        width: 150,
        height: 150,
        marginRight: 20,
        top: 50
    },
    textContainer: {
        flex: 1,
    },
    languageText: {
        fontSize: 18,
        fontWeight: 'bold',
        left: 160,
        bottom: 50,
    },
    experienceText: {
        fontSize: 14,
        color: '#666',
        left: 330,
        bottom: 50,
    },
})

export default LanguageItem