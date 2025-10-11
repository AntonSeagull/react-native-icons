

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiChalkboardSimpleLight = (props: IconProps) => {

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
          <Path  d="M240,194H230V168a6,6,0,0,0-6-6H160a6,6,0,0,0-6,6v26H38V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v80a6,6,0,0,0,12,0V56a14,14,0,0,0-14-14H40A14,14,0,0,0,26,56V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12Zm-74-20h52v20H166Z" />
        </G>
      </Svg>
    );
  }

