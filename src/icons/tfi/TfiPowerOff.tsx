

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiPowerOff = (props: IconProps) => {

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
          <Path  d="M16 9.5c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5c0-3.498 2.476-6.579 5.888-7.326l0.214 0.977c-2.956 0.647-5.102 3.317-5.102 6.349 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-3.028-2.143-5.698-5.096-6.348l0.215-0.977c3.408 0.751 5.881 3.831 5.881 7.325zM9 0h-1v10h1v-10z" />
        </G>
      </Svg>
    );
  }

