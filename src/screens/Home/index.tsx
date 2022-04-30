import { styles } from "./styles";
import { FlatList, Text, View } from "react-native";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useCallback, useState } from "react";
import { ListHeader } from "../../components/ListHeader";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Load } from "../../components/Load";

export function Home() {

    const [category, setCategory] = useState('');
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    const handleCategorySelect = (categoryId: string) => {

        categoryId === category ? setCategory('') : setCategory(categoryId);

    }

    const handleAppointmentDetails = (guildSelected: AppointmentProps) => {

        navigation.navigate('AppointmentDetails', { guildSelected });

    }

    const handleAppointmentCreate = () => {

        navigation.navigate('AppointmentCreate');

    }

    async function loadAppointments() {

        const response = await AsyncStorageLib.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage);
        }

        setLoading(false);

    }

    // quando o usuário voltar para a tela home, useFocusEffect é executado.
    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

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

                    {
                        loading ? <Load /> :
                            <>
                                <ListHeader
                                    title="Partidas agendadas"
                                    subtitle={`Total ${appointments.length}`}
                                />

                                <FlatList
                                    data={appointments}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => (
                                        <Appointment
                                            data={item}
                                            onPress={() => handleAppointmentDetails(item)}
                                        />
                                    )}
                                    ItemSeparatorComponent={() => <ListDivider />}
                                    contentContainerStyle={{ paddingBottom: 69 }}
                                    style={styles.matches}
                                    showsVerticalScrollIndicator={false}
                                />
                            </>
                    }

                </View>

            </View>
        </Background>
    )
}