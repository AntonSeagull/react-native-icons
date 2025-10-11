

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyInrThin = (props: IconProps) => {

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
          <Path  d="M204,80a4,4,0,0,1-4,4H163.42a57,57,0,0,1,.58,8,56.06,56.06,0,0,1-56,56H82.35l80.34,73a4,4,0,1,1-5.38,5.92l-88-80A4,4,0,0,1,72,140h36a48,48,0,0,0,47.32-56H72a4,4,0,0,1,0-8h81.25A48.09,48.09,0,0,0,108,44H72a4,4,0,0,1,0-8H200a4,4,0,0,1,0,8H136.81a56.24,56.24,0,0,1,24.85,32H200A4,4,0,0,1,204,80Z" />
        </G>
      </Svg>
    );
  }

