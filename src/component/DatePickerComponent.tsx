import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

const DatePickerComponent = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    console.log("shivam =",date)
    return (
        <>
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    console.log("data==",date)
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                mode='date'
            />
            {/* <DatePicker date={date} onDateChange={setDate} /> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default DatePickerComponent