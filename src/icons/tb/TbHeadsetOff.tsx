

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHeadsetOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M4 14v-3c0 -1.953 .7 -3.742 1.862 -5.13m2.182 -1.825a8 8 0 0 1 11.956 6.955v3" />
          <Path  d="M18 19c0 1.657 -2.686 3 -6 3" />
          <Path  d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
          <Path  d="M16.169 12.18c.253 -.115 .534 -.18 .831 -.18h1a2 2 0 0 1 2 2v2m-1.183 2.826c-.25 .112 -.526 .174 -.817 .174h-1a2 2 0 0 1 -2 -2v-2" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

