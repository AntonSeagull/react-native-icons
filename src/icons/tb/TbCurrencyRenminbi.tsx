

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyRenminbi = (props: IconProps) => {

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
          <Path  d="M15 9v8a2 2 0 1 0 4 0" />
          <Path  d="M19 9h-14" />
          <Path  d="M19 5h-14" />
          <Path  d="M9 9v4c0 2.5 -.667 4 -2 6" />
        </G>
      </Svg>
    );
  }

