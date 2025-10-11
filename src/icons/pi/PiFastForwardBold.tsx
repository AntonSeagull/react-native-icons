

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFastForwardBold = (props: IconProps) => {

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
          <Path d="M246.81,111.29,158.63,55.12A19.91,19.91,0,0,0,128,71.84v30L54.63,55.12A19.91,19.91,0,0,0,24,71.84V184.16a19.93,19.93,0,0,0,30.63,16.72L128,154.15v30a19.93,19.93,0,0,0,30.63,16.72l88.18-56.17a19.79,19.79,0,0,0,0-33.42ZM48,176.64V79.36L124.38,128Zm104,0V79.36L228.38,128Z" />
        </G>
      </Svg>
    );
  }

