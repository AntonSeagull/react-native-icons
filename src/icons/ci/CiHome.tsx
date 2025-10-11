

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiHome = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M19.37,10.22l-6.2-7.6a1.5,1.5,0,0,0-2.33-.01L4.63,10.22a2.5,2.5,0,0,0-.57,1.59v7.63a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.81A2.5,2.5,0,0,0,19.37,10.22ZM10,20.94v-5.5a1.5,1.5,0,0,1,1.5-1.5h1a1.5,1.5,0,0,1,1.5,1.5v5.5Zm8.94-1.5a1.511,1.511,0,0,1-1.5,1.5H15v-5.5a2.5,2.5,0,0,0-2.5-2.5h-1A2.5,2.5,0,0,0,9,15.44v5.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.81a1.474,1.474,0,0,1,.34-.95l6.22-7.61A.474.474,0,0,1,12,3.06a.479.479,0,0,1,.39.19l6.21,7.61a1.474,1.474,0,0,1,.34.95Z" />
        </G>
      </Svg>
    );
  }

