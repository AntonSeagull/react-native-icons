

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoHourglassSharp = (props: IconProps) => {

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
          <Path d="M416,32H96V144L204,256,96,368V480H416V368L308,256,416,144ZM272,224V336l91,96H148l92-96V224l-80-80H352Z" />
        </G>
      </Svg>
    );
  }

