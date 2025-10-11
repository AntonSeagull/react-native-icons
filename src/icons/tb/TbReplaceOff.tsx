

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbReplaceOff = (props: IconProps) => {

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
          <Path  d="M7 3h1a1 1 0 0 1 1 1v1m-.303 3.717a1 1 0 0 1 -.697 .283h-4a1 1 0 0 1 -1 -1v-4c0 -.28 .115 -.532 .3 -.714" />
          <Path  d="M19 15h1a1 1 0 0 1 1 1v1m-.303 3.717a1 1 0 0 1 -.697 .283h-4a1 1 0 0 1 -1 -1v-4c0 -.28 .115 -.532 .3 -.714" />
          <Path  d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
          <Path  d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

