

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMarkdownLogoBold = (props: IconProps) => {

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
          <Path  d="M232,44H24A20,20,0,0,0,4,64V192a20,20,0,0,0,20,20H232a20,20,0,0,0,20-20V64A20,20,0,0,0,232,44Zm-4,144H28V68H228ZM48,148V108a12,12,0,0,1,20.49-8.49L88,119l19.51-19.52A12,12,0,0,1,128,108v40a12,12,0,0,1-24,0V137l-7.51,7.52a12,12,0,0,1-17,0L72,137v11a12,12,0,0,1-24,0Zm98.63-23.5a12,12,0,0,1,16.87-1.87l.5.4V108a12,12,0,0,1,24,0v15l.5-.4a12,12,0,0,1,15,18.74l-20,16a12,12,0,0,1-15,0l-20-16A12,12,0,0,1,146.63,124.5Z" />
        </G>
      </Svg>
    );
  }

