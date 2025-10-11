

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyDirham = (props: IconProps) => {

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
          <Path  d="M8.5 19h-3.5" />
          <Path  d="M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521" />
          <Path  d="M7 4v9" />
          <Path  d="M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744" />
          <Path  d="M11 13.01v-.01" />
        </G>
      </Svg>
    );
  }

