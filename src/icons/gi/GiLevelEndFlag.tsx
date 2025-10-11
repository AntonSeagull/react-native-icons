

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiLevelEndFlag = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M448 25c-8.4 0-15 6.61-15 15s6.6 15 15 15 15-6.61 15-15-6.6-15-15-15zm7 50.53L373.1 96l81.9 20.5V75.53zM439 131v292h18V135.5l-18-4.5zm-158 54v46h46v-46h-46zm-64 64v46h46v-46h-46zm64 0v46h46v-46h-46zm-128 64v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zM89 377v46h46v-46H89zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zM25 441v46h46v-46H25zm64 0v46h46v-46H89zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm144 0v46h46v-46h-46z" fill="#000" />
        </G>
      </Svg>
    );
  }

