import { Image, View } from "react-native";
import { styles } from "./styles";
import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
    guildId: string;
    iconId: string;
}

export function GuildIcon({ guildId, iconId }: Props) {

    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    //'https://www.iphoned.nl/wp-content/uploads/2017/07/discord-580x375.jpg'

    return (
        <View style={styles.container}>
            {
                iconId ?
                    <Image
                        source={{ uri }}
                        style={styles.image}
                        resizeMode="cover" // para a imagem se ajustar quando a resolução não tiver adequada.
                    />
                    :
                    <DiscordSvg
                        width={40}
                        height={40}
                    />
            }
        </View>
    )

}