import { GestureHandlerRootView, RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';
import React from 'react';

type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <GestureHandlerRootView>
            <RectButton
                style={styles.container}
                {...rest}
            >

                <View style={styles.iconWrapper}>
                    <Image source={DiscordImg} style={styles.icon} />
                </View>

                <Text style={styles.title}>
                    {title}
                </Text>

            </RectButton>
        </GestureHandlerRootView>
    )
}