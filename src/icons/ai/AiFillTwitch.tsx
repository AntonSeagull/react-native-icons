

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const AiFillTwitch = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 1042 1042"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M57.143 0 0 142.857v542.857h171.429V800h114.285L400 685.714h142.857l200-200V0zm314.286 428.571h-85.715V198.214h85.715zm200 0h-85.715V198.214h85.715z" />
        </G>
      </Svg>
    );
  }

