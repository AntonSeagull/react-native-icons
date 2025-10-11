

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlForward = (props: IconProps) => {

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
          <Path  d="M3 2.436v12.136l7.281-6.098-7.281-6.038zM4 4.564l4.719 3.913-4.719 3.952v-7.865zM15.281 8.474l-6.46 5.41-0.643-0.768 5.54-4.639-5.537-4.592 0.639-0.77 6.461 5.359z" />
        </G>
      </Svg>
    );
  }

