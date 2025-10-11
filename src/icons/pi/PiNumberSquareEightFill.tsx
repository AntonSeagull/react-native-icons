

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberSquareEightFill = (props: IconProps) => {

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
          <Path d="M112,100a16,16,0,1,1,16,16A16,16,0,0,1,112,100Zm16,32a20,20,0,1,0,20,20A20,20,0,0,0,128,132Zm96-84V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM164,152a35.93,35.93,0,0,0-14.19-28.61,32,32,0,1,0-43.62,0A36,36,0,1,0,164,152Z" />
        </G>
      </Svg>
    );
  }

