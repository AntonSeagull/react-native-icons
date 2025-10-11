

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiChartLineThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V151.19L93.37,101a4,4,0,0,1,5-.19l61.41,46.05L221.37,93a4,4,0,0,1,5.26,6l-64,56a4,4,0,0,1-5,.19l-61.41-46L36,161.81V204H224A4,4,0,0,1,228,208Z" />
        </G>
      </Svg>
    );
  }

