

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLoader = (props: IconProps) => {

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
          <Path  d="M12 6l0 -3" />
          <Path  d="M16.25 7.75l2.15 -2.15" />
          <Path  d="M18 12l3 0" />
          <Path  d="M16.25 16.25l2.15 2.15" />
          <Path  d="M12 18l0 3" />
          <Path  d="M7.75 16.25l-2.15 2.15" />
          <Path  d="M6 12l-3 0" />
          <Path  d="M7.75 7.75l-2.15 -2.15" />
        </G>
      </Svg>
    );
  }

