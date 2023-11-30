import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import DatePicker from 'react-native-date-picker'
import moment from "moment"

export default function History() {
    const [fromdate, setfromdate] = useState(new Date())
    const [fromopen, setfromopen] = useState(false)
    const [todate, settodate] = useState(new Date())
    const [toopen, settoopen] = useState(false)
    console.log(fromdate, todate, "Date_selection")

    return (
        <View style={styles.container}>
            <View style={styles.containerC1} >
                <View style={{ flex: 1, }} >
                    <View style={styles.dateRangeContainer}>
                        <TouchableOpacity style={styles.dateRangeContainerC} onPress={() => setfromopen(true)}>
                            <Text style={styles.dateText}>From : {fromdate && moment(fromdate).format('ll')} </Text>
                            <DatePicker
                                modal
                                maximumDate={new Date()}
                                mode={'date'}
                                open={fromopen}
                                date={fromdate}
                                onConfirm={(date) => {
                                    setfromopen(false)
                                    setfromdate(date)
                                }}
                                onCancel={() => {
                                    setfromopen(false)
                                }}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dateRangeContainerC} onPress={() => settoopen(true)}>
                            <Text style={styles.dateText}>From : {todate && moment(todate).format('ll')} </Text>
                            <DatePicker
                                modal
                                minimumDate={fromdate}
                                maximumDate={new Date()}
                                mode={'date'}
                                open={toopen}
                                date={todate}
                                onConfirm={(date) => {
                                    settoopen(false)
                                    settodate(date)
                                }}
                                onCancel={() => {
                                    settoopen(false)
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.clearButton}>
                        <Text style={styles.dateText} onPress={() => { settodate(new Date()), setfromdate(new Date()) }}>CLEAR</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardContainer}>
                    <Text>From: March-18-2022</Text>
                    <Text>From: March-18-2022</Text>
                </View>

                {/* <>
                    <Button title="Open" onPress={() => setOpen(true)} />
                    <DatePicker
                        modal
                        mode={'date'}
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </> */}

            </View>
            <View style={styles.containerC2} >
                <FloatingAction
                    color={'#3460A9'}
                    showBackground={true}
                    onPressItem={name => {
                        console.log(`selected button: ${name}`);
                    }}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerC1: {
        flex: 9.5,
        backgroundColor: 'green',

    },
    containerC2: {
        flex: 0.5,
        backgroundColor: 'red'
    },
    dateRangeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#94AFDB',
    },
    dateRangeContainerC: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFE0E1',
        borderRightColor: 'gray',
        borderRightWidth: 0.5
    },
    dateRangeContainerCCrossButton: {
        flex: 0.3,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3460A9'
    },
    dateText: {
        fontWeight: 'bold',
        color: '#000000'
    },
    cardContainer: {
        flex: 9,
        justifyContent: 'center',
        paddingTop: 20,
        width: '95%',
        marginHorizontal: '2.5%',
        flexDirection: 'row',
    },
    clearButton: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFE0E1',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
    }


});