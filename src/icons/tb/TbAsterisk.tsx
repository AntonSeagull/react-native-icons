

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAsterisk = (props: IconProps) => {

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
          <Path  d="M12 12l8 -4.5" />
          <Path  d="M12 12v9" />
          <Path  d="M12 12l-8 -4.5" />
          <Path  d="M12 12l8 4.5" />
          <Path  d="M12 3v9" />
          <Path  d="M12 12l-8 4.5" />
        </G>
      </Svg>
    );
  }

