

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyEthThin = (props: IconProps) => {

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
          <Path  d="M219.15,125.53l-88-112a4,4,0,0,0-6.3,0l-88,112a4,4,0,0,0,0,4.94l88,112a4,4,0,0,0,6.3,0l88-112A4,4,0,0,0,219.15,125.53ZM132,27.57l77.71,98.9L132,161.79Zm-8,134.22L46.29,126.47,124,27.57Zm0,8.79v57.85l-70.72-90Zm8,0,70.72-32.15-70.72,90Z" />
        </G>
      </Svg>
    );
  }

