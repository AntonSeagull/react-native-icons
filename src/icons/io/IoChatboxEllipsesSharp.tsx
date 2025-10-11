

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoChatboxEllipsesSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M456,48H56A24,24,0,0,0,32,72V360a24,24,0,0,0,24,24h72v80l117.74-80H456a24,24,0,0,0,24-24V72A24,24,0,0,0,456,48ZM160,248a32,32,0,1,1,32-32A32,32,0,0,1,160,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,248ZM456,80h0Z" />
        </G>
      </Svg>
    );
  }

