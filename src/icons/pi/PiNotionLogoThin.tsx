

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNotionLogoThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M216,44H168a4,4,0,0,0,0,8h20V192.43L107.5,46.07A4,4,0,0,0,104,44H40a4,4,0,0,0,0,8H60V204H40a4,4,0,0,0,0,8H88a4,4,0,0,0,0-8H68V63.57l80.5,146.36A4,4,0,0,0,152,212h40a4,4,0,0,0,4-4V52h20a4,4,0,0,0,0-8ZM70.77,52h30.86l83.6,152H154.37Z" />
        </G>
      </Svg>
    );
  }

