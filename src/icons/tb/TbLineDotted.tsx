

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLineDotted = (props: IconProps) => {

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
          <Path  d="M4 12v.01" />
          <Path  d="M8 12v.01" />
          <Path  d="M12 12v.01" />
          <Path  d="M16 12v.01" />
          <Path  d="M20 12v.01" />
        </G>
      </Svg>
    );
  }

