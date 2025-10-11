

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSteelClaws = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M20.11 16.705h120.31l300.66 207.21 56.39 134-138.88-96-7.06-16.79zM309 423.295l-56.39-134-238.08-164.09v94.45zm-48.47-146.43l10.79 25.64 128.76 89-56.39-134-329.16-226.8v76.64z" />
        </G>
      </Svg>
    );
  }

