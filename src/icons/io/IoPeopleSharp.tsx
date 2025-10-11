

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPeopleSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M234,296c-28.16-14.3-59.24-20-82-20-44.58,0-136,27.34-136,82v42H166V383.93c0-19,8-38.05,22-53.93C199.17,317.32,214.81,305.55,234,296Z" />
          <Path d="M340,288c-52.07,0-156,32.16-156,96v48H496V384C496,320.16,392.07,288,340,288Z" />
        </G>
      </Svg>
    );
  }

