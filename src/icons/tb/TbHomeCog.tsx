

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHomeCog = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M9 21v-6a2 2 0 0 1 2 -2h1.6" />
          <Path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4.159" />
          <Path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M18 14.5v1.5" />
          <Path d="M18 20v1.5" />
          <Path d="M21.032 16.25l-1.299 .75" />
          <Path d="M16.27 19l-1.3 .75" />
          <Path d="M14.97 16.25l1.3 .75" />
          <Path d="M19.733 19l1.3 .75" />
        </G>
      </Svg>
    );
  }

