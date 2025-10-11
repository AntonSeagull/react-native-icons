

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFilter = (props: IconProps) => {

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
          <Path  d="M0.54 0l6.46 9.229v7.771h3v-7.771l6.46-9.229h-15.92zM9 8.914v7.086h-1v-7.086l-5.54-7.914h12.080l-5.54 7.914z" />
        </G>
      </Svg>
    );
  }

