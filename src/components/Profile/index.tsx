import { View, Text } from "react-native";
import { Avatar } from "../Avatar";

import { styles } from "./style";

export function Profile() {

    return (
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/AllanDutra.png" />

            <View>

                <View style={styles.user}>

                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Allan
                    </Text>

                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>

            </View>

        </View>
    )

}