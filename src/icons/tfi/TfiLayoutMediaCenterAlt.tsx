

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutMediaCenterAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M1 13h15v1h-15v-1zM4 15.993h9v-1h-9v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z" />
        </G>
      </Svg>
    );
  }

