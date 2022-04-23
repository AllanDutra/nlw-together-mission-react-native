import { styles } from "./styles";
import { FlatList, Text, View } from "react-native";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { useNavigation } from "@react-navigation/native";

export function Home() {

    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
    ]

    const handleCategorySelect = (categoryId: string) => {

        categoryId === category ? setCategory('') : setCategory(categoryId);

    }

    const handleAppointmentDetails = () => {

        navigation.navigate('AppointmentDetails');

    }

    const handleAppointmentCreate = () => {

        navigation.navigate('AppointmentCreate');

    }

    return (
        <Background>
            <View>

                <View style={styles.header}>

                    <Profile />

                    <ButtonAdd onPress={handleAppointmentCreate} />

                </View>

                <View>

                    <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />

                    <View style={styles.content}>

                        <ListHeader
                            title="Partidas agendadas"
                            subtitle="Total 6"
                        />

                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment
                                    data={item}
                                    onPress={handleAppointmentDetails}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>

                </View>

            </View>
        </Background>
    )
}