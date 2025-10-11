

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFerry = (props: IconProps) => {

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
          <Path  d="M2 18h15.293c1.02 0 1.972 -.503 2.536 -1.34l2.171 -3.66h-18.479z" />
          <Path  d="M14 8l-1 -2" />
          <Path  d="M6.107 12.675l1.384 -4.675h8l2.675 4.598" />
        </G>
      </Svg>
    );
  }

