

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTrain = (props: IconProps) => {

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
          <Path  d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8" />
          <Path  d="M3 15h16a2 2 0 0 0 2 -2" />
          <Path  d="M3 6v5h17.5" />
          <Path  d="M3 10l0 4" />
          <Path  d="M8 11l0 -5" />
          <Path  d="M13 11l0 -4.5" />
          <Path  d="M3 19l18 0" />
        </G>
      </Svg>
    );
  }

