import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {

    const { secondary100, secondary40, heading } = theme.colors;

    const navigation = useNavigation();

    const handleGoBack = () => navigation.goBack();

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary40]}
        >
            {/* INDICADO PARA BOTÕES QUE SÓ TEM ÍCONES. */}
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action && <View>
                    {action}
                </View>
            }

        </LinearGradient>
    )
}