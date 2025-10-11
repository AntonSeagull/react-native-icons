

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTransactionPound = (props: IconProps) => {

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
          <Path  d="M21 14a2 2 0 1 0 -4 0v4a2 2 0 0 1 -2 2h6" />
          <Path  d="M15 17h4" />
          <Path  d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M7 5h8" />
          <Path  d="M7 5v8a3 3 0 0 0 3 3h1" />
        </G>
      </Svg>
    );
  }

