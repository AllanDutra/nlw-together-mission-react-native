import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {

    const uri = 'https://www.iphoned.nl/wp-content/uploads/2017/07/discord-580x375.jpg';

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover" // para a imagem se ajustar quando a resolução não tiver adequada.
        />
    )

}