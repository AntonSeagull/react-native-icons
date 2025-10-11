

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FaPlug = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 384 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M320,32a32,32,0,0,0-64,0v96h64Zm48,128H16A16,16,0,0,0,0,176v32a16,16,0,0,0,16,16H32v32A160.07,160.07,0,0,0,160,412.8V512h64V412.8A160.07,160.07,0,0,0,352,256V224h16a16,16,0,0,0,16-16V176A16,16,0,0,0,368,160ZM128,32a32,32,0,0,0-64,0v96h64Z" />
        </G>
      </Svg>
    );
  }

