

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiHtml5Multimedia = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#444444" d="M27.33 7.595h-5.003l-3.535 3.535h5.003zM16.021 11.13l3.535-3.535h-5.002l-3.537 3.535zM23.804 21.438h-15.608v-10.274l3.568-3.569h-5.004l-2.103 2.103v15.278h22.685v-13.846h-3.538z" />
        </G>
      </Svg>
    );
  }

