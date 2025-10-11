

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdjustmentsSearch = (props: IconProps) => {

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
          <Path  d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M6 4v4" />
          <Path  d="M6 12v8" />
          <Path  d="M12 14a2 2 0 0 0 -1.042 3.707" />
          <Path  d="M12 4v10" />
          <Path  d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M18 4v1" />
          <Path  d="M18 9v2" />
          <Path  d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path  d="M20.2 20.2l1.8 1.8" />
        </G>
      </Svg>
    );
  }

