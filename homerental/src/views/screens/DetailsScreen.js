import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, ScrollView, Image, FlatList, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('screen')
import COLORS from '../../consts/colors';


const DetailsScreen = ({ navigation, route }) => {
    const house = route.params;
    const InterioImage = ({ image }) => {
        return (
            <Image source={image} style={styles.interiorImage} />
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }} >
            <ScrollView>
                <View style={styles.backgroundImageContainer}>
                    <ImageBackground style={styles.backgroundImage} source={house.image}>
                        <View style={styles.header} >
                            <View style={styles.headerBtn}>
                                <Icon name="arrow-back-ios" size={25} onPress={navigation.goBack} />
                            </View>
                            <View style={styles.headerBtn}>
                                <Icon name="favorite" size={25} color={COLORS.red} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.virtualTag}>
                        <Text style={{ color: COLORS.white }} >Real Tour</Text>
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >{house.title} </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.rating}>
                                <Text style={{ color: COLORS.white }}>4.5</Text>
                            </View>
                            <Text style={{ fontSize: 14, marginLeft: 5 }} >287 ratings</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, color: COLORS.grey }} >{house.location}</Text>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <View style={styles.facility}>
                            <Icon name="hotel" size={18} />
                            <Text style={styles.facilityText}>3</Text>
                        </View>
                        <View style={styles.facility}>
                            <Icon name="bathtub" size={18} />
                            <Text style={styles.facilityText}>3</Text>
                        </View>
                        <View style={styles.facility}>
                            <Icon name="aspect-ratio" size={18} />
                            <Text style={styles.facilityText}>75m area</Text>
                        </View>
                    </View>
                    <Text style={{ marginTop: 20, color: COLORS.grey }} >{house.details}</Text>
                    <FlatList
                        snapToInterval={width - 20}
                        keyExtractor={(_, key) => key.toString()}
                        contentContainerStyle={{ marginTop: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={house.interiors}
                        renderItem={({ item }) => <InterioImage image={item} />}
                    />
                    <View style={styles.footer}>
                        <View>
                            <Text style={{ color: COLORS.blue, fontWeight: 'bold', fontSize: 18 }} >4500 TL</Text>
                            <Text style={{ color: COLORS.grey, fontWeight: 'bold', fontSize: 12 }} >TOTAL PRİCE</Text>
                        </View>
                        <View style={styles.bookNowBtn} >
                            <Text style={{ color: COLORS.white }} >Book Now</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundImageContainer: {
        elevation: 20,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        height: 350,
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden'
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    headerBtn: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    virtualTag: {
        top: -20,
        width: 120,
        backgroundColor: COLORS.dark,
        height: 40,
        paddingHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 40
    },
    rating: {
        height: 30,
        width: 35,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    facility: {
        flexDirection: 'row',
        marginRight: 15
    },
    facilityText: {
        marginLeft: 5,
        color: COLORS.grey
    },
    interiorImage: {
        width: width / 3 - 20,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
    },
    footer: {
        height: 70,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bookNowBtn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.dark,
        borderRadius: 10,
        paddingHorizontal: 20
    }
})

export default DetailsScreen;