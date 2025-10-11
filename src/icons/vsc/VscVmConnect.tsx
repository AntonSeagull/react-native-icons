

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscVmConnect = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M1.5 2h13l.5.5v5.503a5.006 5.006 0 0 0-1-.583V3H2v9h5a5 5 0 0 0 1 3H4v-1h3v-1H1.5l-.5-.5v-10l.5-.5z" />
          <Path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 7a3 3 0 1 1 0-6.001A3 3 0 0 1 12 15z" />
          <Path d="M12.133 11.435l1.436 1.436.431-.431-1.004-1.005L14 10.431l-.431-.43-1.436 1.434zm-1.129 1.067L10 11.498l.431-.431 1.436 1.435-1.436 1.436-.431-.431 1.004-1.005z" />
        </G>
      </Svg>
    );
  }

